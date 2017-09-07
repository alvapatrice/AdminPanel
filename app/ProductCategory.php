<?php
/**
 * Created by PhpStorm.
 * User: YULIANG
 * Date: 2017/8/25
 * Time: 14:07
 */

namespace App;

use Illuminate\Database\Eloquent\Model;


class ProductCategory extends Model
{
	public function products(){
        return $this->hasMany(Product::class);
    }
}