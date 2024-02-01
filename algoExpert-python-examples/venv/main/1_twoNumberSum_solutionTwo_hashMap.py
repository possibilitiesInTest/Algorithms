def two_number_sum(array, target_sum):
    # hashMap solution
    nums = {}
    for num in array:
        potential_match = target_sum -num
        if potential_match in nums:
            return [potential_match, num]
        else:
            nums[num] = True
    return []


array1 = [3, 5, -4, 8, 12, 1, -2, 6]
target = 10

print(two_number_sum(array1, target))
