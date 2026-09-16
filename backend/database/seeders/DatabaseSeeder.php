<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Faq;
use App\Models\Project;
use App\Models\Service;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Seed Courses
        $courses = [
            [
                'title' => 'Amazon FBA | Private Label Mastery',
                'slug' => 'amazon-fba-private-label',
                'category' => 'E-Commerce',
                'level' => 'Beginner to Advanced',
                'duration' => '2.5 Months (Practical + Mentorship)',
                'format' => 'Physical & Online Classes',
                'tag' => 'BESTSELLER',
                'badge_color' => 'blue',
                'short_description' => 'Master end-to-end Amazon Private Label business from profitable product hunting and global sourcing to listing optimization and high-ROI PPC campaigns.',
                'overview' => 'Comprehensive Amazon FBA Private Label training transforming students into verified sellers and account managers.',
                'outcomes' => [
                    'Conduct product research using Helium 10 & Jungle Scout',
                    'Source products from Alibaba with safe Trade Assurance',
                    'Create high-converting listings with optimized keywords',
                    'Master Amazon PPC campaigns and ACOS optimization',
                    'Manage Seller Central accounts, FBA shipments, and account health',
                ],
                'tools' => ['Helium 10', 'Jungle Scout', 'Alibaba', 'Seller Central'],
                'prerequisites' => 'Basic computer literacy. No prior e-commerce background needed.',
                'is_featured' => true,
                'order' => 1,
            ],
            [
                'title' => 'Shopify Store Development & Dropshipping',
                'slug' => 'shopify-dropshipping',
                'category' => 'E-Commerce',
                'level' => 'Beginner to Intermediate',
                'duration' => '2 Months',
                'format' => 'Physical & Online',
                'tag' => 'HIGH DEMAND',
                'badge_color' => 'green',
                'short_description' => 'Build high-converting Shopify stores from scratch and master local and international dropshipping with automated fulfillment and targeted paid ads.',
                'overview' => 'Learn how to build, customize, and scale modern Shopify e-commerce stores without upfront inventory risk.',
                'outcomes' => [
                    'Build and configure professional Shopify stores',
                    'Source winning products for local and international dropshipping',
                    'Set up Cash-on-Delivery (COD) courier integrations in Pakistan',
                    'Drive profitable traffic using TikTok and Meta Ads',
                ],
                'tools' => ['Shopify Admin', 'CJ Dropshipping', 'TikTok Ads Manager', 'Meta Ads Manager'],
                'prerequisites' => 'Basic computer literacy.',
                'is_featured' => true,
                'order' => 2,
            ],
            [
                'title' => 'Digital Marketing & Paid Social Advertising',
                'slug' => 'digital-marketing-paid-ads',
                'category' => 'Marketing',
                'level' => 'All Levels',
                'duration' => '2 Months',
                'format' => 'Physical & Online',
                'tag' => 'MOST POPULAR',
                'badge_color' => 'rose',
                'short_description' => 'Master revenue-generating paid ad campaigns across Meta (Facebook & Instagram), TikTok, Google, and Snapchat Ads.',
                'overview' => 'Master media buying and performance advertising from customer avatars to pixel setup, creative hooks, and ROAS scaling.',
                'outcomes' => [
                    'Structure multi-tier ad funnels (TOF, MOF, BOF retargeting)',
                    'Run Meta Advantage+ and custom audience campaigns',
                    'Launch TikTok and Google search campaigns with positive ROI',
                ],
                'tools' => ['Meta Ads Manager', 'TikTok Ads Manager', 'Google Ads', 'GA4'],
                'prerequisites' => 'None.',
                'is_featured' => true,
                'order' => 3,
            ],
        ];

        foreach ($courses as $c) {
            Course::updateOrCreate(['slug' => $c['slug']], $c);
        }

        // 2. Seed Services
        $services = [
            [
                'title' => 'Amazon Store & Account Management',
                'slug' => 'amazon-account-management',
                'category' => 'Store Management',
                'short_description' => 'Complete operational management for Amazon Seller Central accounts, from inventory planning and PPC optimization to health monitoring.',
                'problem' => 'Listing suppressions, rising PPC ad costs, and stockouts hurt profit margins.',
                'solution' => 'Dedicated operational management monitoring listings, bids, and inventory around the clock.',
                'what_we_handle' => [
                    'Daily Seller Central dashboard & account health monitoring',
                    'Amazon PPC campaign optimization and ACOS reduction',
                    'FBA shipment creation and replenishment planning',
                ],
                'deliverables' => [
                    'Dedicated account manager',
                    'Weekly advertising & sales KPI dashboard',
                ],
            ],
            [
                'title' => 'Shopify Store Operations & Management',
                'slug' => 'shopify-store-management',
                'category' => 'Store Management',
                'short_description' => 'End-to-end technical, operational, and visual management for high-traffic Shopify stores.',
                'problem' => 'Handling customer inquiries, broken apps, and checkout friction consumes valuable founder time.',
                'solution' => 'Comprehensive technical store maintenance, speed optimization, and courier tracking automation.',
                'what_we_handle' => [
                    'Product catalog updates and inventory sync',
                    'Shopify speed optimization and checkout enhancements',
                    'Courier API monitoring and order reconciliation',
                ],
                'deliverables' => [
                    'Fast, bug-free Shopify storefront',
                    'Weekly checkout & conversion rate report',
                ],
            ],
        ];

        foreach ($services as $s) {
            Service::updateOrCreate(['slug' => $s['slug']], $s);
        }
    }
}
