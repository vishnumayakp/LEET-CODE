public class Solution {
    public void DuplicateZeros(int[] arr) {
      int length = arr.Length;
        int possibleLength = length - 1;
        int zeroesToDuplicate = 0;
        for (int i = 0; i <= possibleLength - zeroesToDuplicate; i++)
        {
            if (arr[i] == 0)
            {

                if (i == possibleLength - zeroesToDuplicate)
                {
                    arr[possibleLength] = 0;
                    possibleLength--; 
                    break;
                }
                zeroesToDuplicate++;  
            }
        }
        for (int i = possibleLength - zeroesToDuplicate; i >= 0; i--)
        {
            if (arr[i] == 0)
            {
                arr[i + zeroesToDuplicate] = 0;  
                zeroesToDuplicate--;
                arr[i + zeroesToDuplicate] = 0; 
            }
            else
            {
                arr[i + zeroesToDuplicate] = arr[i];  
            }
        }
        Console.WriteLine(string.Join(", ", arr));
    }    
}