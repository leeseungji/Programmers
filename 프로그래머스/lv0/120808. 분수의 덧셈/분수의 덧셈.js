function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    var numer = numer1*denom2+numer2*denom1;
    var denom = denom1*denom2;
    var G = 0;
    
    var big = numer>denom ? numer:denom;
    
    for (var i=1; i<=big; i++){
        if(numer%i==0 && denom%i==0){
            G=i;
        }
    }
    
    answer[0]=numer/G;
    answer[1]=denom/G;
    
    
    
    return answer;
}