<?php
    /*
        Plugin Name: Gym Fitness - Location with Leaflet
        Description: Creates a shortcode to display the location
        Version: 1.0
        Author: Gabriel S. Valdivia
        Author URI: https://twitter.com/valdivia_gabe
        Text Domain: gymfitness
    */
    
    if(!defined('ABSPATH')) die();

// Shortcode API
function gymfitness_location_shortcode() { 
        $location = get_field('location');
    ?>
    
    <div class="location">
        <input type="hidden" id="lat" value="<?php echo $location['lat'] ?>"/>
        <input type="hidden" id="lng" value="<?php echo $location['lng'] ?>"/>
        <input type="hidden" id="address" value="<?php echo $location['address'] ?>"/>

        <div id="map"></div>
    </div>
<?php    
}
add_shortcode('gymfitness_location', 'gymfitness_location_shortcode'); //[gymfitness_location]