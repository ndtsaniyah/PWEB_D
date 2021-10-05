public class DotProduct {
    static int n = 3;

    static int dotProduct(int vect_A[], int vect_B[]) {

        int product = 0;

        for (int i = 0; i < n; i++)
            product = product + vect_A[i] * vect_B[i];
        return product;
    }

    public static void main(String[] args) {

        int vectorA[] = { 3, -5, 4 };
        int vectorB[] = { 2, 6, 5 };

        int hasil = dotProduct(vectorA, vectorB);

        System.out.print("Dot product: " + hasil);
    }
}