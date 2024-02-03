def sorted_squared_array(array):
    sorted_squares = [0 for _ in array]
    left = 0
    right = len(array) - 1

    for idx in reversed(range(len(array))):
        smaller = array[left]
        larger = array[right]

        if abs(smaller) > abs(larger):
            sorted_squares[idx] = smaller * smaller
            left += 1
        else:
            sorted_squares[idx] = larger * larger
            larger -= 1

    return sorted_squares


result = sorted_squared_array([1, 2, 3, 4, 5])
result_2 = sorted_squared_array([3, 4, -5, 2, -6])

print(result)
print(result_2)
