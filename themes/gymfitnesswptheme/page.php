<?php get_header(); ?>

    <main class="container page section no-sidebars">
        <pre>
        <?php var_dump( get_field('location') ); ?>
        </pre>
        <?php get_template_part('template-parts/page','loop'); ?>
    </main>
    
<?php get_footer(); ?>