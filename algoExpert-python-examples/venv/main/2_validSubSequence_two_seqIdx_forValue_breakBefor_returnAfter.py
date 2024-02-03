def valid_subsequence(array, sequence):
    seq_idx = 0

    for value in array:
        if seq_idx == len(sequence):
            break
        if sequence[seq_idx] == value:
            seq_idx += 1

    return seq_idx == len(sequence)


result = valid_subsequence([5, 1, 22 ,25, 6, -1, 8, 10], [1, 6, -1, 10])

print(result)