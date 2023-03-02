function solution(numbers) {
    var answer = []; //배열이름
    
    for(var i=0; i<numbers.length; i++)
        //배열이름.push를 하여 배열 삽입
        answer.push(numbers[i]*2);
    
    return answer;
}