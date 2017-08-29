<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

Route::group(['prefix'=>'api'],function(){
    Route::get('settings','ApiController@siteSettings');
    Route::get('posts','ApiController@posts');
    Route::get('posts/{id}','ApiController@postsByCategory');
    Route::get('product-categories','ApiController@getProductCategories');
    Route::get('products','ApiController@productsList');
    Route::get('category/products/{id}','ApiController@productsByCategory');
    Route::get('products/{id}','ApiController@productDescription');
    Route::get('solutions','ApiController@solutionsList');
    Route::get('solutions/{id}','ApiController@solutionDescription');
    Route::get('primary-case-studies','ApiController@primaryCaseStudies');
    Route::get('secondary-case-studies','ApiController@secondaryCaseStudies');
});

