<?php

namespace App\Http\Controllers;
use App\About;
use App\CaseStudy;
use App\FriendlyLink;
use App\CustomerConctact;
use App\CustomerRequirement;
use App\DevelopmentBase;
use App\Join;
use App\Product;
use App\ProductCategory;
use App\Requirement;
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
		
		
		$banners=array();
		$home_banners=array();
		$home_banners['1']=Voyager::setting('home_banner1');
		$home_banners['2']=Voyager::setting('home_banner2');
		$home_banners['3']=Voyager::setting('home_banner3');
		$banners['home']=$home_banners;
		$banners['prd_center']=Voyager::setting('pro_banner');
		$banners['solutions']=Voyager::setting('slt_banner');
		$banners['cases']=Voyager::setting('case_banner');
		$banners['news']=Voyager::setting('news_banner');
		$banners['dev_bases']=Voyager::setting('dev_banner');
		$banners['contact']=Voyager::setting('contact_banner');
		
		$banner_hovers=array();
		$banner_hovers['home']=Voyager::setting('home_banner_hover');
		$banner_hovers['prd_center']=Voyager::setting('pro_banner_hover');
		$banner_hovers['solutions']=Voyager::setting('slt_banner_hover');
		$banner_hovers['cases']=Voyager::setting('case_banner_hover');
		$banner_hovers['news']=Voyager::setting('news_banner_hover');
		$banner_hovers['dev_bases']=Voyager::setting('dev_banner_hover');
		$banner_hovers['contact']=Voyager::setting('contact_banner_hover');
		
		$settings['banners']=$banners;
		$settings['hovers']=$banner_hovers;
		$settings['weibo_acc']=Voyager::setting('weibo_account');
		$settings['wechat_acc']=Voyager::setting('wechat_account');
		$settings['comp_app']=Voyager::setting('comp_app');
		$settings['comp_app_url']=Voyager::setting('comp_app_url');
		

        return json_encode($settings);
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
        $products=Product::orderBy('category_id')->get(['id','name','icon','category_id','title']);
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
        $solutions=Solution::orderBy('created_at')->get(['id','image','title','description','name']);
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
	public function aboutUsList(){
        $aboutUs=About::orderBy('created_at')->get(['id','title']);
        return json_encode($aboutUs);
    }
	public function friendlyLinks(){
		$friendlyLinks=FriendlyLink::orderBy('created_at')->get(['id','name','link']);
        return json_encode($friendlyLinks);
	}

    public function aboutUsDescription($id){
        $aboutUs=About::where('id',$id)->get();
        return json_encode($aboutUs);
    }

    public function joinUs(){
        $joinUs=Join::all();
        return json_encode($joinUs);
    }

    public function contactUs(Request $request){

        $contactus=new CustomerConctact();
        $contactus['sender']=$request->get('name');
        $contactus['phone']=$request->get('tel');
        $contactus['email']=$request->get('email');
        $contactus['interests']=$request->get('checked_input');
        $contactus['content']=$request->get('desp');

        if($contactus->save()){
            return "恭喜您提交成功！<br/>感谢您对隆盈金服的支持，我们将在1个工作日内回复您！";
        }else{
            return "网络开小差了！<br/>感谢您的支持，请再次提交！";
        }
    }

    public function makeRequirement(Request $request){

        $input=$request->all();
        $requirement= new CustomerRequirement();
        $requirement['sender']=$request->get('name');
        $requirement['phone']=$request->get('tel');
        $requirement['company']=$request->get('compary_name');
        $requirement['industry']=$request->get('checked_input');
        $requirement['systems']=$request->get('checked_input');
        $requirement['description']=$request->get('desp');
        $requirement['is_processed']=0;

        if($requirement->save()){
            return "恭喜您提交成功！<br/>感谢您对隆盈金服的支持，我们将在1个工作日内回复您！";
            //return $input;
        }else{
            return "网络开小差了！<br/>感谢您的支持，请再次提交！";
        }

    }
}
