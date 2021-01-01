// Step 1 START
// Step 2 Set up an array of initially empty "buckets".
// Step 3 Scatter: Go over the original array, putting each object in its bucket.
// Step 4 Sort each non-empty bucket.
// Step 5 Gather: Visit the buckets in order and put all elements back into the original array.
// Step 6 STOP

public class BucketSort {

  public static void main(String[] args) {
    int[] array = { 10, 9, 7, 101, 23, 44, 12, 78, 34, 23 };
    int[] count = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
    int n = array.length - 1;

    for (int a = 0; a < n; a++) {
      int arrVal = array[a];
      count = new int[arrVal];
      count[arrVal] = arrVal;
    }
    System.out.println("Printing Sorted List ...");
    for (int i = 0; i < count.length; i++) {
      System.out.println(count[i]);
    }
  }
}
