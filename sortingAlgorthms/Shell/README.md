# Algorithm

## Shell_Sort(Arr, n)
- Step 1: SET FLAG = 1, GAP_SIZE = N
- Step 2: Repeat Steps 3 to 6 while FLAG = 1 OR GAP_SIZE > 1
- Step 3:SET FLAG = 0
- Step 4:SET GAP_SIZE = (GAP_SIZE + 1) / 2
- Step 5:Repeat Step 6 for I = 0 to I < (N -GAP_SIZE)
- Step 6:IF Arr[I + GAP_SIZE] > Arr[I]
SWAP Arr[I + GAP_SIZE], Arr[I]
SET FLAG = 0
- Step 7: END