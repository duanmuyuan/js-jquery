import $ from 'jquery';

$(() => {
  console.log('jquery=>ready');
});

window.onload = () => {
  console.log('js');
};

const $ = {

}

// 1、选择器查询 jQuery
const jqClass = $('.jQuery_class').text();
const jqId = $('#jQuery_id').text();
console.log(`${jqClass} <=> ${jqId}`);
