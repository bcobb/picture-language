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

