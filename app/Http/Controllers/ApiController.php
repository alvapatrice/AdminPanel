<?php

namespace App\Http\Controllers;

use App\CaseStudy;
use App\CustomerConctact;
use App\DevelopmentBase;
use App\Join;
use App\Product;
use App\ProductCategory;
use App\Solution;
//use App\Request;
use Illuminate\Http\Request;
use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Models\Category;
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

    public function postCategories(){
        $categories=Category::all();
        return json_encode($categories);
    }

    public function postsByCategory($id){
        $posts=Post::where(['status'=>'PUBLISHED','category_id'=>$id])->orderBy('created_at')->paginate(3);
        return json_encode($posts);
    }

    public function singlePost($id){
        $post=Post::where('id',$id)->get();
        return json_encode($post);
    }

    public function getProductCategories(){
        $p_categories=ProductCategory::get(['id','name','icon']);
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
        $images=$product->toArray();


        return json_encode($images);
    }
    public function featuredProductsList(){
        $products=Product::where('featured',1)->get(['id','name']);
        return json_encode($products);
    }

    public  function solutionsList(){
        $solutions=Solution::orderBy('created_at')->get(['id','image','title','description']);
        return json_encode($solutions);
    }

    public function featuredSolutionsList(){
        $solutions=Solution::where('featured',1)->get(['id','title','icon','description']);
        $new=$solutions->toArray();
        return json_encode($new);
    }

    public function solutionDescription($id){

        $solution=Solution::where('id',$id)->get();
        return json_encode($solution);
    }

    public function primaryCaseStudies(){

        $caseStudies=CaseStudy::where('prime',true)->orderBy('created_at')->paginate(6);
        return json_encode($caseStudies);
    }

    public function secondaryCaseStudies(){

        $caseStudies=CaseStudy::where('prime',false)->orderBy('created_at')->get();
        return json_encode($caseStudies);
    }

    public function developmentBasesList(){
        $developmentBases=DevelopmentBase::orderBy('created_at')->get(['id','name']);
        return json_encode($developmentBases);
    }

    public function developmentBaseDescription($id){
        $developmentBase=DevelopmentBase::where('id',$id)->get();
        return json_encode($developmentBase);
    }

    public function joinUs(){
        $joinUs=Join::all();
        return json_encode($joinUs);
    }

    public function contactUs(Request $request){

        $contactus=new CustomerConctact();
        $contactus['sender']=$request->input('');
        $contactus['phone']=$request->input('');
        $contactus['email']=$request->input('');
        $contactus['interests']=$request->input('');
        $contactus['content']=$request->input('');

        if($contactus->save()){
            return "success";
        }else{
            return 'failure';
        }
    }

    public function makeRequirement(Request $request){
        $request= new Request();
        //$request
    }
}
