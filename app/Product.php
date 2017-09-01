<?php
/**
 * Created by PhpStorm.
 * User: YULIANG
 * Date: 2017/8/25
 * Time: 14:55
 */

namespace App;
use Illuminate\Database\Eloquent\Model;

class Product extends Model

{
    protected  $fillable= ['name'];
    public function mobTerminals(){
        return $this->belongsToMany(Mobterminal::class, 'product_mobterminals');
    }

    public function webTerminals(){
        return $this->belongsToMany(Webterminal::class, 'product_webterminals');
    }

    public function categoryId(){
        return $this->belongsTo(ProductCategory::class);
    }
}