def non_constructible_change(coins):
    # O(nlogn) Time | O(n) space
    coins.sort()
    current_max = 0

    for coin in coins:
        if coin <= current_max + 1:
            current_max += coin

    return current_max + 1


coins = [5, 7, 1, 1, 2, 3, 22]
result = non_constructible_change(coins)
print(result)