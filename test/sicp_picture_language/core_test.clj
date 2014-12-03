(ns sicp-picture-language.core-test
  (:require [clojure.test :refer :all]
            [sicp-picture-language.core :refer :all]))

(deftest test-xcor
  (testing "We can retrieve a vector's x coordinate"
    (is (= (xcor-vect (make-vect 1 2)) 1))))

(deftest test-ycor
  (testing "We can retrieve a vector's y coordinate"
    (is (= (ycor-vect (make-vect 1 2)) 2))))

(deftest test-vector-addition
  (testing "Adding two vectors together"
    (is (= (add-vect (make-vect 1 2) (make-vect 2 3)) (make-vect 3 5)))))

(deftest test-vector-subtraction
  (testing "Subtracting one vector from another"
    (is (= (sub-vect (make-vect 1 2) (make-vect 2 3)) (make-vect -1 -1)))))

(deftest test-vector-scaling
  (testing "Scaling a vector by a constant"
    (is (= (scale-vect 10 (make-vect 1 2)) (make-vect 10 20)))))

(deftest test-frame-origin
  (testing "We can retrieve a frame's origin"
    (let [origin (make-vect 0 0)
          edge1 (make-vect 0 1)
          edge2 (make-vect 1 0)]
      (is (= (origin-frame (make-frame origin edge1 edge2)) (make-vect 0 0))))))

(deftest test-frame-edge1
  (testing "We can retrieve a frame's first edge"
    (let [origin (make-vect 0 0)
          edge1 (make-vect 0 1)
          edge2 (make-vect 1 0)]
      (is (= (edge1-frame (make-frame origin edge1 edge2)) (make-vect 0 1))))))

(deftest test-frame-edge2
  (testing "We can retrieve a frame's second edge"
    (let [origin (make-vect 0 0)
          edge1 (make-vect 0 1)
          edge2 (make-vect 1 0)]
      (is (= (edge2-frame (make-frame origin edge1 edge2)) (make-vect 1 0))))))

(deftest test-frame-coordmap
  (let [origin (make-vect 5 5)
        edge1 (make-vect 0 2)
        edge2 (make-vect 2 0)
        frame (make-frame origin edge1 edge2)]
    (testing "0,0 maps to the frame origin"
      (is (= ((frame-coord-map frame) (make-vect 0 0)) (make-vect 5 5))))
    (testing "1,1 maps to the relative unit diagonal"
      (is (= ((frame-coord-map frame) (make-vect 1 1)) (make-vect 7 7))))))

(deftest test-segment-selectors
  (let [start (make-vect 0 0)
        end (make-vect 10 10)
        segment (make-segment start end)]
    (testing "the start of the segment is the first vector"
      (is (= (start-segment segment) (make-vect 0 0))))
    (testing "the end of the segment is the second vector"
      (is (= (end-segment segment) (make-vect 10 10))))))

(deftest test-segments-painter
  (let [frame-origin (make-vect 5 5)
        frame-edge1 (make-vect 0 2)
        frame-edge2 (make-vect 2 0)
        frame (make-frame frame-origin frame-edge1 frame-edge2)
        segment1 (make-segment (make-vect 0 0) (make-vect 1 1))
        segment2 (make-segment (make-vect 0 1) (make-vect 1 0))]
    (testing "the unit forward diagonal maps to the frame forward diagonal"
      (let [painter (segments-painter [segment1])]
        (is (= (painter frame) (vector (make-segment (make-vect 5 5) (make-vect 7 7)))))))
    (testing "the unit backwards diagonal maps to the frame backwards diagonal"
      (let [painter (segments-painter [segment2])]
        (is (= (painter frame) (vector (make-segment (make-vect 7 5) (make-vect 5 7)))))))))
