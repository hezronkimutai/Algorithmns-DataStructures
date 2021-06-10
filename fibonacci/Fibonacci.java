import java.util.*;

public class Solution {

    public static int fibonacci(int n) {
        int arr[] = new int[n+1];
        for(int i=0; i<=n; i++){
            if(i==0){
                arr[0] = 0;
            }else if(i==1){
                arr[i] = 1;
            }
            else{
                arr[i] = arr[i-1]+arr[i-2];
            }
        }
        return arr[n];
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        scanner.close();
        System.out.println(fibonacci(n));
    }
}
