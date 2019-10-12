---
title: "C Course 2019-2020 Exercises: Array and String"
date: "2019-10-12T15:09:31+0000"
description: "Array and string exercises for C Course 2019-2020"
---

### 1. strlen 
C strings are array whose last element is NUL ('\0'). Code a function that takes char array as argument and returns length of string.

<details style="cursor: pointer">
<summary>Solution:</summary>
<p>


```c
int strlen_for(char string[]) {
    int len;
    for(len = 0; string[len] != '\0'; len++);

    return len;
}

int strlen_while(char string[]) {
    int len = 0;
    while (string[len] != '\0') {
        len++;
    }

    return len;
}
```


</p>
</details>


### 2. strcmp
Code the given c function prototype below:

```c
int my_strcmp(char str1[], char str2[]);
```

according to given output condition:

    output = 0 if str1 and str2 are equal
    output > 0 if str1 is greater than str2
    output < 0 if str1 is less than str2 

__Hint:__ ASCII  

<br/>
<details style="cursor: pointer">
<summary>Solution:</summary>
<p>


```c
int my_strlen(char string[]) {
    int len;
    for(len = 0; string[len] != '\0'; len++);

    return len;
}

int strsum(char str[]) {
    int len = my_strlen(str);
    int result = 0;
    for(int i = 0; i < len; i++) {
        result += str[i];
    }

    return result;
}

int my_strcmp(char str1[], char str2[]) {
    return strsum(str1) - strsum(str2);
}
```


</p>
</details>
<br/>


