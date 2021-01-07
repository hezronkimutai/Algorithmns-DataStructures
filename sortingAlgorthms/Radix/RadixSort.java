import java.util.*;

public class RadixSort {

  public static void main(String[] args) {
    Scanner commandReader = new Scanner(System.in);
    System.out.println(
      "Welcome to Java Program to perform radix sort on int array"
    );
    System.out.println("Enter total number of elements : ");
    int length = commandReader.nextInt();
    int[] arr = new int[length];
    System.out.printf("Enter %d integers %n", length);
    for (int i = 0; i < length; i++) {
      arr[i] = commandReader.nextInt();
    }
    radix_sort(arr);
    System.out.println("\nSorted array");
    for (int i = 0; i < arr.length; i++) {
      System.out.println(arr[i] + "");
    }
    commandReader.close();
  }

  static int largest(int a[]) {
    int larger = a[0], i;
    for (i = 1; i < 10; i++) {
      if (a[i] > larger) larger = a[i];
    }
    return larger;
  }

  static void radix_sort(int a[]) {
    int bucket[][] = new int[10][10];
    int bucket_count[] = new int[10];
    int i, j, k, remainder, NOP = 0, divisor = 1, larger, pass;
    larger = largest(a);
    while (larger > 0) {
      NOP++;
      larger /= 10;
    }
    for (pass = 0; pass < NOP; pass++) {
      for (i = 0; i < 10; i++) bucket_count[i] = 0;
      for (i = 0; i < 10; i++) {
        remainder = (a[i] / divisor) % 10;
        bucket[remainder][bucket_count[remainder]] = a[i];
        bucket_count[remainder] += 1;
      }
      i = 0;
      for (k = 0; k < 10; k++) {
        for (j = 0; j < bucket_count[k]; j++) {
          a[i] = bucket[k][j];
          i++;
        }
      }
      divisor *= 10;
    }
  }
}
