---
title: "C Course 2019-2020 Exercises: File I/O"
date: "2019-10-12T15:09:32+0000"
description: "Exercises for C Course 2019-2020"
---

### 1. fsum
Find the sum of numbers up to 4 digits delimeted by whitespace in the file [fsum.txt](/fsum.txt).


<details style="cursor: pointer">
<summary>Answer:</summary>1123442
</details>

<details style="cursor: pointer">
<summary>Solution:</summary>
<p>


```c
#include <stdio.h>
#include <stdlib.h>
#define SIZE 5

int main() {
    FILE *fp = fopen("fsum.txt", "r");

    if (!fp) {
        printf("file could not be opened!");
        return 1;
    }

    int c;
    char chunk[SIZE];
    int number;
    int index = 0;
    int sum = 0;

    while ((c = fgetc(fp)) != EOF) {
        if (c == ' ') {
            number = atoi(chunk);
            sum += number;

            for (int i = 0; i < SIZE; i++) {
                chunk[i] = '\0';
            }
            index = 0;
        } else {
            chunk[index] = c;

            index++;
        }
    }

    number = atoi(chunk);
    sum += number;

    printf("%d\n", sum);

    if (ferror(fp)) {
        printf("something happened while reading");
        return 1;
    }

    fclose(fp);
    
    return 0;
}
```


</p>
</details>
