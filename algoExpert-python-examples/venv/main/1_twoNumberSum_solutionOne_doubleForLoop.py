def two_number_sum(array, target_sum):
    # double for loop solution
    for i in range(len(array) - 1):
        first_num = array[i]
        for j in range(i + 1, len(array)):
            second_num = array[j]
            if first_num + second_num == target_sum:
                return [first_num, second_num]

    return []


array1 = [3, 5, -4, 8, 11, 1, -1, 6]
target = 10

print(two_number_sum(array1, target))
