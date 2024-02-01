def two_number_sum(array, target_sum):
    # double pointer solution
    array.sort()
    left = 0
    right = len(array) - 1

    while left < right:
        curr_sum = array[left] + array[right]
        if curr_sum == target_sum:
            return [array[left], array[right]]
        elif curr_sum < target_sum:
            left += 1
        elif curr_sum > target_sum:
            right -= 1
    return []


array1 = [3, 5, -4, 8, 13, 1, -3, 6]
target = 10

print(two_number_sum(array1, target))