import java.io.*;

class Combination {

    static void combinationUtil(int arr[], int data[], int start,
        int end, int index, int itemsPerCombination) {
        if (index == itemsPerCombination) {
            for (int j = 0; j < itemsPerCombination; j++)
            System.out.print(data[j] + " ");
            System.out.println("");
            return;
        }

        for (int i = start; i <= end && end - i + 1 >= itemsPerCombination - index; i++)
        {
            data[index] = arr[i];
            combinationUtil(arr, data, i + 1, end, index + 1, itemsPerCombination);
        }
    }

    static void printCombination(int arr[], int arrLen, int itemsPerCombination) {
        int data[] = new int[itemsPerCombination];
        combinationUtil(arr, data, 0, arrLen - 1, 0, itemsPerCombination);
    }

    public static void main(String[] args) {
        int arr[] = { 1, 2, 3, 4, 5};
        int itemsPerCombination = 3;
        int arrLen = arr.length;
        printCombination(arr, arrLen, itemsPerCombination);
    }
}
