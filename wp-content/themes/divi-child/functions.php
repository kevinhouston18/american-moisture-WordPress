<?php
/**
 * Divi Cake Child Theme
 * Functions.php
 *
 * ===== NOTES ==================================================================
 * 
 * Unlike style.css, the functions.php of a child theme does not override its 
 * counterpart from the parent. Instead, it is loaded in addition to the parent's 
 * functions.php. (Specifically, it is loaded right before the parent's file.)
 * 
 * In that way, the functions.php of a child theme provides a smart, trouble-free 
 * method of modifying the functionality of a parent theme. 
 * 
 * Discover Divi Child Themes: https://divicake.com/products/category/divi-child-themes/
 * Sell Your Divi Child Themes: https://divicake.com/open/
 * 
 * =============================================================================== */
 
 /* Enqueue Css/JS to Child Style */
function divichild_enqueue_scripts() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_register_style('custom-style', get_stylesheet_directory_uri() .'/assets/css/custom-style.css');
    wp_enqueue_style( 'custom-style' );
    wp_enqueue_style('print', get_stylesheet_directory_uri() .'/assets/css/print.css', array(), '1.0.0', 'print');
    wp_enqueue_script('custom-js', get_stylesheet_directory_uri() . '/assets/js/rh-meter-calculator.js', array(), '1.0.0', 'true' );
    // wp_enqueue_script('custom-search-script', get_stylesheet_directory_uri() . '/assets/js/search-script-header.js', array('jquery'), '1.0.0', 'true' );
    wp_enqueue_script('print-calculator-pdf', get_stylesheet_directory_uri() . '/assets/js/print-calc-pdf.js', array(), '1.0.0', 'true' );


// Enqueue Css/js By Calculator Slug
if ( is_page( array( 'cc-moisture-calculator' ) ) ) {
    wp_enqueue_script('jquery-js', get_stylesheet_directory_uri() . '/assets/js/jquery.js', array(), '1.0.0', 'true' );
    wp_enqueue_script('jquery-validation-js', get_stylesheet_directory_uri() . '/assets/js/jquery.validate.js', array('jquery-js'), '1.0.0', 'true' );
    wp_enqueue_script('datepicker-js', get_stylesheet_directory_uri() . '/assets/js/jquery-ui.js', array('jquery-js'), '1.0.0', 'true' );
    wp_enqueue_script('vapourEmissions-js', get_stylesheet_directory_uri() . '/assets/js/jquery.calulator.vapourEmissions.js', array('jquery-js'), '1.0.0', 'true' );
    wp_enqueue_script('vaporEmissionsUI-js', get_stylesheet_directory_uri() . '/assets/js/vaporEmissions.UI.js', array('jquery-js'), '1.0.0', 'true' );
}
    wp_register_style('custom-icon', get_stylesheet_directory_uri() .'/assets/icons.css');
    wp_enqueue_style( 'custom-icon' );
}
add_action( 'wp_enqueue_scripts', 'divichild_enqueue_scripts' );

/* Remove Wp Version Number */
function remove_version_info() { 
    return ''; 
} 

add_filter('the_generator', 'remove_version_info');




// Add Explore button on shop page
add_action( 'woocommerce_after_shop_loop_item', 'add_add_to_cart_buttons', 1 );

    function add_add_to_cart_buttons() {
      if( is_shop()) { 
        echo '<a class="explore_button" href="'.get_permalink($product_id).'">'.'View Details  &nbsp;<span class="icon-coolicon explore_icon"></span>'.'</a><br/>';

        remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart' );

      }
    }

/* Remove Category From Product Detail Page */    
remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );


// Add InStock Label on Product Detail Page
add_action( 'woocommerce_single_product_summary', 'add_price_below_button' );
function add_price_below_button() {
    global $product;
    $pstatus = $product->get_stock_status();

    if ($pstatus === 'instock') {
      echo "<span class='in_stock_product'>In Stock</span>";
      echo "<div class='add_to_Cart_product'>".do_shortcode( '[yith_compare_button]' )."</div>";
    }
    else{
      echo "<span class='out_stock_product'>Out Of Stock</span>";
      echo "<div class='add_to_Cart_product'>".do_shortcode( '[yith_compare_button]' )."</div>";
    }
    
}


// Add Explore button on Upsell/Cross-sell/Category/Attribute Page
add_action( 'woocommerce_after_shop_loop_item', 'remove_add_to_cart_buttons_new', 1 );

    function remove_add_to_cart_buttons_new() {
      $classes = get_body_class();
      if ( in_array('single-product',$classes) ||  in_array('tax-product_cat',$classes) || in_array('archive',$classes) ){
        echo '<a class="explore_button" href="'.get_permalink($product_id).'">'.'View Details  &nbsp;<span class="icon-coolicon explore_icon"></span>'.'</a><br/>';

        remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart' );

      }
    }


    function tutsplus_excerpt_in_product_archives() {
      
      echo "<span class='p_description'>".wp_trim_words( get_the_excerpt(), 10 )."</span><br>";
            
  }
  add_action( 'woocommerce_after_shop_loop_item_title', 'tutsplus_excerpt_in_product_archives', 40 );
  

// Add Firstname, Last name Field on Woocoomerce Registration Page
add_action( 'woocommerce_register_form_start', 'bbloomer_add_name_woo_account_registration',10, 0  );
  
function bbloomer_add_name_woo_account_registration() {
    ?>
  
    <p class="form-row form-row-first">
    <label for="reg_billing_first_name"><?php _e( 'First name', 'woocommerce' ); ?> <span class="required">*</span></label>
    <input type="text" class="input-text" name="billing_first_name" id="reg_billing_first_name" value="<?php if ( ! empty( $_POST['billing_first_name'] ) ) esc_attr_e( $_POST['billing_first_name'] ); ?>" />
    </p>
  
    <p class="form-row form-row-last">
    <label for="reg_billing_last_name"><?php _e( 'Last name', 'woocommerce' ); ?> <span class="required">*</span></label>
    <input type="text" class="input-text" name="billing_last_name" id="reg_billing_last_name" value="<?php if ( ! empty( $_POST['billing_last_name'] ) ) esc_attr_e( $_POST['billing_last_name'] ); ?>" />
    </p>
  
    <div class="clear"></div>
  
    <?php
}
  
///////////////////////////////
// 2. VALIDATE FIELDS
  
add_filter( 'woocommerce_registration_errors', 'bbloomer_validate_name_fields', 10, 3 );
  
function bbloomer_validate_name_fields( $errors, $username, $email ) {
    if ( isset( $_POST['billing_first_name'] ) && empty( $_POST['billing_first_name'] ) ) {
        $errors->add( 'billing_first_name_error', __( 'First name is required!', 'woocommerce' ) );
    }
    if ( isset( $_POST['billing_last_name'] ) && empty( $_POST['billing_last_name'] ) ) {
        $errors->add( 'billing_last_name_error', __( 'Last name is required!.', 'woocommerce' ) );
    }
    return $errors;
}
  
///////////////////////////////
// 3. SAVE FIELDS
  
add_action( 'woocommerce_created_customer', 'bbloomer_save_name_fields' );
  
function bbloomer_save_name_fields( $customer_id ) {
    if ( isset( $_POST['billing_first_name'] ) ) {

        update_user_meta( $customer_id, 'billing_first_name', sanitize_text_field( $_POST['billing_first_name'] ) );
        update_user_meta( $customer_id, 'first_name', sanitize_text_field($_POST['billing_first_name']) );
    }
    if ( isset( $_POST['billing_last_name'] ) ) {
        update_user_meta( $customer_id, 'billing_last_name', sanitize_text_field( $_POST['billing_last_name'] ) );
        update_user_meta( $customer_id, 'last_name', sanitize_text_field($_POST['billing_last_name']) );
    }
  
}

/* Disply Add to Cart Buttom on Shop Page */
add_action( 'woocommerce_after_shop_loop_item', 'quadlayers_woocommerce_template_loop_add_to_cart', 10 );
// add_action( 'woocommerce_after_shop_loop_item_title', 'quadlayers_woocommerce_template_loop_add_to_cart', 10 );

function quadlayers_woocommerce_template_loop_add_to_cart(){
   woocommerce_template_loop_add_to_cart(array('class'=>'button product_type_simple add_to_cart_button ajax_add_to_cart listing_add_to_cart')); 
}


//  Update Cart Product Number Using Ajax
 add_filter( 'woocommerce_add_to_cart_fragments', 'update_cart_count_via_ajax', 10, 1 );

function update_cart_count_via_ajax( $fragments ) {
    
    $fragments['div.header-cart-count'] = '<div class="header-cart-count">' . WC()->cart->get_cart_contents_count() . '</div>';
    
    return $fragments;
    
}

// Add Qty Text before the Quality type on Product Detail Page
add_action( 'woocommerce_before_add_to_cart_quantity', 'qty_front_add_cart' );
 
function qty_front_add_cart() {
 echo '<div class="qty">Qty: </div>'; 
}



/* hide woocommerce zoom icon using function.php by wooexplorer*/ 
function remove_image_zoom_support() {
  remove_theme_support( 'wc-product-gallery-zoom' );
}
add_action( 'wp', 'remove_image_zoom_support', 100 );

require_once 'shortcodes/rh_meter_calculation.php';
require_once 'shortcodes/cc_moisture_calculation.php';


