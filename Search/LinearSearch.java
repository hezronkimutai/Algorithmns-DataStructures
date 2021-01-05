public class LinearSearch {

  private static int index = 0;

  public static void main(String[] args) {
    int[] arr = { 5, 78, 65, 89, 56, 23, 100 };
    search(arr, 56);
    System.out.println("56 is at index");
    System.out.println(index);
  }

  private static void search(int[] array, int search) {
    for (int i = 0; i < array.length; i++) {
      if (array[i] == search) {
        index = i;
      }
    }
  }
}
