function solution(array) {
    var answer = 0;
    
    array.length%2==1;
    
    var increase = array.sort(function(a, b) { 
    return a - b});

    // array.sort(); //오름차순배열 완료
    
    
    answer=array[parseInt(array.length/2)];

    return answer;
}