CREATE TABLE `CDC-COVID` (
	`id` text PRIMARY KEY NOT NULL,
	`geography_type` text,
	`geography` text,
	`group_name` text,
	`group_category` text,
	`indicator_name` text,
	`indicator_category` text,
	`time_period` text,
	`time_year` text,
	`time_type` text,
	`estimate` text,
	`coninf_95` text,
	`sample_size` text,
	`suppression_flag` integer,
	`updated_at` integer,
	`created_at` integer
);
