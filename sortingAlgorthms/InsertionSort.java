public class InsertionSort {

  public static void sort(int array[]) {
    int n = array.length;
    //Outer loop
    for (int j = 1; j < n; j++) {
      int key = array[j];
      int i = j - 1;
      // when i is a positive value {array indexes can't be negative}
      // and when current element of the first loop is less than the
      // previous element of the first loop
      // then assign the previous element to the current index
      while ((i > -1) && (array[i] > key)) {
        array[i + 1] = array[i];
        i--;
      }
      // Otherwise, let the current element be the current element
      array[i + 1] = key;
    }
  }

  public static void main(String a[]) {
    int[] arr1 = { 9, 14, 3, 2, 43, 11, 58, 22 };
    System.out.println("Before Insertion Sort");
    for (int i : arr1) {
      System.out.print(i + " ");
    }
    System.out.println();
    //Sort
    sort(arr1);
    System.out.println("After Insertion Sort");
    for (int i : arr1) {
      System.out.print(i + " ");
    }
  }
}
