var express = require('express');
var router = express.Router();
var Closet = require('../models/Closet.js')

//옷 추천 로직 
//일단은 카테고리 별로 랜덤 하나씩 추천
router.get('/', async(req, res, next)=> {
    try {
        let arr = [];
        let arr1 = [];
        let arr2 = [];
        const outer_closet = await Closet.find({'cate' : 'outer'});
        const top_closet = await Closet.find({'cate' : 'top'});
        const pants_closet = await Closet.find({'cate' : 'pants'});
        const socks_closet = await Closet.find({'cate' : 'socks'});
        const shoes_closet = await Closet.find({'cate' : 'shoes'});
        //세트 1번
        function set1(){
            let num = Math.floor(Math.random()*10);
            console.log(`num: ${num}`);
            if(num<=4){
                arr.push(outer_closet[0]);
            }else{
                arr.push(outer_closet[1]);
            }

            let num1 = Math.floor(Math.random()*10);
            console.log(`num1: ${num1}`);
            if(num1<=4){
                arr.push(top_closet[0]);
            }else{
                arr.push(top_closet[1]);
            }

            let num2 = Math.floor(Math.random()*10);
            console.log(`num2: ${num2}`);
            if(num2<=4){
                arr.push(pants_closet[0]);
            }else{
                arr.push(pants_closet[1]);
            }

            let num3 = Math.floor(Math.random()*10);
            console.log(`num3: ${num3}`);
            if(num3<=4){
                arr.push(socks_closet[0]);
            }else{
                arr.push(socks_closet[1]);
            }

            let num4 = Math.floor(Math.random()*10);
            console.log(`num4: ${num4}`);
            if(num4<=4){
                arr.push(shoes_closet[0]);
            }else{
                arr.push(shoes_closet[1]);
            }

        }
        //세트 2번
        function set2(){
            let num = Math.floor(Math.random()*10);
            console.log(`num: ${num}`);
            if(num<=4){
                arr1.push(outer_closet[0]);
            }else{
                arr1.push(outer_closet[1]);
            }

            let num1 = Math.floor(Math.random()*10);
            console.log(`num1: ${num1}`);
            if(num1<=4){
                arr1.push(top_closet[0]);
            }else{
                arr1.push(top_closet[1]);
            }

            let num2 = Math.floor(Math.random()*10);
            console.log(`num2: ${num2}`);
            if(num2<=4){
                arr1.push(pants_closet[0]);
            }else{
                arr1.push(pants_closet[1]);
            }

            let num3 = Math.floor(Math.random()*10);
            console.log(`num3: ${num3}`);
            if(num3<=4){
                arr1.push(socks_closet[0]);
            }else{
                arr1.push(socks_closet[1]);
            }

            let num4 = Math.floor(Math.random()*10);
            console.log(`num4: ${num4}`);
            if(num4<=4){
                arr1.push(shoes_closet[0]);
            }else{
                arr1.push(shoes_closet[1]);
            }

            
        }
        //세트 3번
        function set3(){
            let num = Math.floor(Math.random()*10);
            console.log(`num: ${num}`);
            if(num<=4){
                arr2.push(outer_closet[0]);
            }else{
                arr2.push(outer_closet[1]);
            }

            let num1 = Math.floor(Math.random()*10);
            console.log(`num1: ${num1}`);
            if(num1<=4){
                arr2.push(top_closet[0]);
            }else{
                arr2.push(top_closet[1]);
            }

            let num2 = Math.floor(Math.random()*10);
            console.log(`num2: ${num2}`);
            if(num2<=4){
                arr2.push(pants_closet[0]);
            }else{
                arr2.push(pants_closet[1]);
            }

            let num3 = Math.floor(Math.random()*10);
            console.log(`num3: ${num3}`);
            if(num3<=4){
                arr2.push(socks_closet[0]);
            }else{
                arr2.push(socks_closet[1]);
            }

            let num4 = Math.floor(Math.random()*10);
            console.log(`num4: ${num4}`);
            if(num4<=4){
                arr2.push(shoes_closet[0]);
            }else{
                arr2.push(shoes_closet[1]);
            }

        }
        set1();
        set2();
        set3();
        console.log(`arr: ${arr}`);
        res.json({arr,arr1,arr2});
    } catch (error) {
        console.log(error);
    }
    
  
  });

module.exports = router;
