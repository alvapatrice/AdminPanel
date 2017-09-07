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
    Route::get('posts/category','ApiController@postCategories');
    Route::get('posts/category/{id}','ApiController@postsByCategory');
    Route::get('posts/{id}','ApiController@singlePost');
    Route::get('product-categories','ApiController@getProductCategories');
    Route::get('products','ApiController@productsList');
    Route::get('products/featured','ApiController@featuredProductsList');
    Route::get('category/products/{id}','ApiController@productsByCategory');
    Route::get('products/{id}','ApiController@productDescription');
    Route::get('solutions','ApiController@solutionsList');
    Route::get('solutions/featured','ApiController@featuredSolutionsList');
    Route::get('solutions/{id}','ApiController@solutionDescription');
    Route::get('primary-case-studies','ApiController@primaryCaseStudies');
    Route::get('secondary-case-studies','ApiController@secondaryCaseStudies');
    Route::get('development-bases','ApiController@developmentBasesList');
    Route::get('development-bases/{id}','ApiController@developmentBaseDescription');
	Route::get('about-us','ApiController@aboutUsList');
    Route::get('about-us/{id}','ApiController@aboutUsDescription');
    Route::get('join-us','ApiController@joinUs');
	 Route::get('friendly-links','ApiController@friendlyLinks');

    Route::post('contact-us','ApiController@contactUs');
    Route::post('requirement','ApiController@makeRequirement');
});

