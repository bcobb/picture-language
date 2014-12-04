(ns sicp-picture-language.core)

(defn make-vect
  "Create a two-dimensional vector"
  [x y]
  [x y])

(defn xcor-vect
  "Return the x-coordinate of the given vector"
  [v]
  (first v))

(defn ycor-vect
  "Return the y-coordinate of the given vector"
  [v]
  (second v))

(defn add-vect
  "The result of adding two vectors together"
  [v w]
  (make-vect (+ (xcor-vect v) (xcor-vect w))
             (+ (ycor-vect v) (ycor-vect w))))

(defn sub-vect
  "The result of subtracting the second vector from the first"
  [v w]
  (make-vect (- (xcor-vect v) (xcor-vect w))
             (- (ycor-vect v) (ycor-vect w))))

(defn scale-vect
  "The result of scaling the given vector by the given constant"
  [c v]
  (make-vect (* (xcor-vect v) c)
             (* (ycor-vect v) c)))

(defn make-frame
  "Create a frame at the given origin with the given edges"
  [origin edge1 edge2]
  [origin edge1 edge2])

(defn- third [v] (nth v 2))

(defn origin-frame
  "Return the origin of the given frame"
  [frame]
  (first frame))

(defn edge1-frame
  "Return the first edge of the given frame"
  [frame]
  (second frame))

(defn edge2-frame
  "Return the second edge of the given frame"
  [frame]
  (third frame))

(defn frame-coord-map
  "Returns a procedure that maps a vector to the corresponding vector within
  the frame"
  [frame]
  (fn [v]
    (add-vect (origin-frame frame)
              (add-vect (scale-vect (xcor-vect v)
                                    (edge1-frame frame))
                        (scale-vect (ycor-vect v)
                                    (edge2-frame frame))))))

(defn make-segment
  "Creates a line segment from two vectors"
  [v w]
  [v w])

(defn start-segment
  "Returns the start of the given segment"
  [segment]
  (first segment))

(defn end-segment
  "Returns the end of the given segment"
  [segment]
  (second segment))

(defn segments-painter
  "Returns a function that paints (in some sense) the given segments into the
  given frame"
  [segments]
  (fn [frame]
    (map (fn [segment] (make-segment ((frame-coord-map frame) (start-segment segment))
                                     ((frame-coord-map frame) (end-segment segment))))
         segments)))

(def unit-square-vectors
  (map (partial apply make-vect)
       (for [x (range 0 2) y (range 0 2)] [x y])))

(def frame-outline-painter
  (let [[bottom-left top-left bottom-right top-right] unit-square-vectors]
    (segments-painter [(make-segment bottom-left bottom-right)
                       (make-segment bottom-right top-right)
                       (make-segment top-right top-left)
                       (make-segment top-left bottom-left)])))

(def frame-cross-painter
  (let [[bottom-left top-left bottom-right top-right] unit-square-vectors]
    (segments-painter [(make-segment bottom-left top-right)
                       (make-segment top-left bottom-right)])))

(def frame-diamond-painter
  (let [[bottom-left top-left bottom-right top-right] unit-square-vectors]
    (segments-painter [(make-segment bottom-left top-right)
                       (make-segment top-left bottom-right)])))

(defn transform-painter
  "Transforms the given painter to paint in the given frame"
  [painter origin corner1 corner2]
  (fn [frame]
    (let [m (frame-coord-map frame)
          new-origin (m origin)]
      (painter (make-frame new-origin
                           (sub-vect (m corner1) new-origin)
                           (sub-vect (m corner2) new-origin))))))

(defn flip-vert
  "Transforms the given painter to flip images vertically"
  [painter]
  (let [[bottom-left top-left _ top-right] unit-square-vectors]
    (transform-painter painter top-left top-right bottom-left)))

(defn flip-horiz
  "Returns a painter flipped horizontally"
  [painter]
  (let [[bottom-left _ bottom-right top-right] unit-square-vectors]
    (transform-painter painter bottom-right bottom-left top-right)))

(defn shrink-to-upper-right
  "Transforms the given painter to paint images shrunk to the first quadrant of
  the original frame"
  [painter]
  (transform-painter painter
                     (make-vect 0.5 0.5)
                     (make-vect 1.0 0.5)
                     (make-vect 0.5 1.0)))

(defn rotate90
  "Transforms the given painter to paint images rotated 90-degrees
  counterclockwise"
  [painter]
  (let [[bottom-left _ bottom-right top-right] unit-square-vectors]
    (transform-painter painter bottom-right top-right bottom-left)))

(defn rotate180
  "Transforms the given painter to paint images rotated 180-degrees
  counterclockwise"
  [painter]
  (-> painter rotate90 rotate90))

(defn rotate270
  "Transforms the given painter to paint images rotated 270-degrees
  counterclockwise"
  [painter]
  (-> painter rotate180 rotate90))

(defn squash-inwards
  "Transforms the painter to paint in the middle-third of the original frame"
  [painter]
  (transform-painter painter
                     (make-vect 0 0)
                     (make-vect 0.65 0.35)
                     (make-vect 0.35 0.65)))

(defn beside
  "Returns a compound painter which arranges two painters to paint beside each
  other"
  [painter1 painter2]
  (let [split-point (make-vect 0.5 0)
        [bottom-left top-left bottom-right _] unit-square-vectors
        paint-left (transform-painter painter1 bottom-left split-point top-left)
        paint-right (transform-painter painter2 split-point bottom-right (make-vect 0.5 1))]
    (fn [frame]
      (paint-left frame)
      (paint-right frame))))

(defn below
  "Returns a compound painter which arranges two painters to paint one above
  the other"
  [painter1 painter2]
  (rotate90 (beside painter1 painter2)))

