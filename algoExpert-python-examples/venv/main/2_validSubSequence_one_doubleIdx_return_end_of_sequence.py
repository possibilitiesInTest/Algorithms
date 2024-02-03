def valid_subsequence(array, sequence):
    # Write your code here.
    arr_idx = 0
    seq_idx = 0

    while arr_idx < len(array) and seq_idx < len(sequence):
        if array[arr_idx] == sequence[seq_idx]:
            seq_idx += 1
        arr_idx += 1

    return seq_idx == len(sequence)


result = valid_subsequence([5, 1, 22 ,25, 6, -1, 8, 10], [1, 6, -1, 10])

print(result)
