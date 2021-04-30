def bis(arr, n):
    dp = [0]*n
    for i in range(n):
        for j in range(i):
            if (
                arr[i] > arr[j] 
                and dp[j] > dp[i]
            ):
                dp[i] = dp[j]
        dp[i] += arr[i]
    print(dp) 
nums = [100, 200, 300, 20, 304, 50, 70]
n = len(nums)

bis(nums,n)
            