<?php

namespace App\Http\Controllers;

use App\CaseStudy;
use App\Product;
use App\ProductCategory;
use App\Solution;
use Illuminate\Http\Request;
use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Models\Post;

//use TCG\Voyager;

class ApiController extends Controller
{
    //
    public function siteSettings(){
        $settings=array();

        $settings['logo']=Voyager::setting('logo');
        $settings['site_title']=Voyager::setting('title');
        $settings['company_phone']=Voyager::setting('comp_hotline');
        $settings['company_email']=Voyager::setting('comp_email');
        $settings['website_url']=Voyager::setting('web_url');
        $settings['headquarters_add']=Voyager::setting('main_address');
        $settings['branch_add']=Voyager::setting('br_address');
        $settings['company_intro']=Voyager::setting('comp_intro');

        return $settings;
    }

    public function posts(){
        $posts=Post::where('status','PUBLISHED')->orderBy('created_at')->paginate(3);
        return $posts;
    }

    public function postsByCategory($id){
        $posts=Post::where(['status'=>'PUBLISHED','category_id'=>$id])->orderBy('created_at')->paginate(1);
        return $posts;
    }

    public function getProductCategories(){
        $p_categories=ProductCategory::where('id',5)->get();
        return json_encode($p_categories);
    }

    public function productsList(){
        $products=Product::orderBy('category_id')->get(['id','name','icon','category_id']);
        return json_encode($products);
    }

    public function productsByCategory($id){
        $products=Product::where('category_id',$id)->orderBy('created_at')->get(['id','name','icon','category_id']);
        return json_encode($products);
    }

    public function productDescription($id){

        $product=Product::where('id',$id)->get();

        return json_encode($product);
    }

    public  function solutionsList(){
        $solutions=Solution::orderBy('created_at')->get(['id','image','title','description']);
        return json_encode($solutions);
    }

    public function solutionDescription($id){

        $solution=Solution::where('id',$id)->get();
        return json_encode($solution);
    }

    public function primaryCaseStudies(){

        $caseStudies=CaseStudy::where('prime',true)->orderBy('created_at')->get();
        return json_encode($caseStudies);
    }

    public function secondaryCaseStudies(){

        $caseStudies=CaseStudy::where('prime',false)->orderBy('created_at')->get();
        return json_encode($caseStudies);
    }
}
