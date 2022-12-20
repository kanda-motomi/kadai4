////////////////////////////////データオブジェクト/////////////////////////////////

let fortuneResults = {   
    money: [    
        {    
            stars: '★★★',
            detail: '最高の金運です！いつの間にかお金が溜まっているかも・・・？',
        },
        {
            stars: '★★',
            detail: 'まずまず金運です！使いすぎには注意しましょう！',
        },
        {
            stars: '★',
            detail: '悪い傾向が見られます！財布の紐は絞めておくと吉です！',
        },
    ],
    work: [
        {    
            stars: '★★★',
            detail: '最高の仕事運です！いつも以上にチャンスが巡ってくるかも・・・？',
        },
        {
            stars: '★★',
            detail: 'まずまず仕事運です！普段通り仕事が進むでしょう！',
        },
        {
            stars: '★',
            detail: '悪い傾向が見られます！自信過剰にならないように注意しましょう',
        },

    ],
    health: [
        {    
            stars: '★★★',
            detail: '最高の健康運です！ランニングの距離を伸ばしても良いですね！',
        },
        {
            stars: '★★',
            detail: 'まずまず健康運です！無理せず体を動かしましょう！',
        },
        {
            stars: '★',
            detail: '悪い傾向が見られます！ケガにご注意を・・・',
        },

    ],
}

////////////////////////////////////////////////////////////////////////////////////////////

$(function () {

    
    $(document).on('click', '.js-fortune-start', function() {

        $(this).toggleClass('js-fortune-restart');    
        $(this).toggleClass('js-fortune-start');    
        $(this).text('もう一度占う！');
        for (let i in fortuneResults){
            let ransu = Math.floor( Math.random() * 3 );
            $('.' + i + ' .stars').text(fortuneResults[i][ransu]['stars']);
            $('.' + i + ' .detail').text(fortuneResults[i][ransu]['detail']);  

        }
        $('.result').fadeOut(0);
        $('.result').fadeIn(1000); 
    });        

    $(document).on('click', '.js-fortune-restart', function() {
        $(this).toggleClass('js-fortune-restart');    
        $(this).toggleClass('js-fortune-start');    
        $(this).text('運勢を占う！');
        $('.result').fadeOut(0);
    }); 
});
