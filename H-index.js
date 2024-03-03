/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let h_index = 1 ;
      let remaining_index = citations.length  ;
      citations.sort((a,b)=>{
          return a-b
      })
      for(let i =0 ; i < citations.length ; i++){
          if(remaining_index - i  >= citations[i] ){
              h_index =  citations[i]
          }
          else if(h_index < remaining_index - i ){
              h_index =  remaining_index - i;
              return h_index ;
          }
      }
      return h_index ;
};
