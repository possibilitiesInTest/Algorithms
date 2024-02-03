def sorted_squared_array(array):
    # Write your code here.
    sorted_squares = [0 for _ in array]

    for idx in range(len(array)):
        # value = array[idx];
        sorted_squares[idx] = array[idx] * array[idx]

    sorted_squares.sort()
    return sorted_squares


result = sorted_squared_array([1, 2, 3, 4, 5])
result_2 = sorted_squared_array([3, 4, -5, 2, -6])

print(result)
print(result_2)
