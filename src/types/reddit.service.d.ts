interface LinkFlairRichtext {
    e: string;
    t: string;
}

interface MediaEmbed {
    content: string;
    width?: number;
    scrolling?: boolean;
    height?: number;
}

interface RedditVideo {
    bitrate_kbps: number;
    fallback_url: string;
    height: number;
    width: number;
    scrubber_media_url: string;
    dash_url: string;
    duration: number;
    hls_url: string;
    is_gif: boolean;
    transcoding_status: string;
}

interface Oembed {
    provider_url: string;
    version: string;
    url: string;
    author_name: string;
    height?: number;
    width: number;
    html: string;
    author_url: string;
    provider_name: string;
    cache_age: any;
    type: string;
    description: string;
    title: string;
    thumbnail_width?: number;
    thumbnail_url: string;
    thumbnail_height?: number;
}

interface SecureMedia {
    reddit_video: RedditVideo;
    type: string;
    oembed: Oembed;
}

interface SecureMediaEmbed {
    content: string;
    width?: number;
    scrolling?: boolean;
    media_domain_url: string;
    height?: number;
}

interface AuthorFlairRichtext {
    a: string;
    e: string;
    u: string;
    t: string;
}

interface Gildings {
    gid_1: number;
}

interface Source {
    url: string;
    width: number;
    height: number;
}

interface Resolution {
    url: string;
    width: number;
    height: number;
}

interface Source2 {
    url: string;
    width: number;
    height: number;
}

interface Resolution2 {
    url: string;
    width: number;
    height: number;
}

interface Gif {
    source: Source2;
    resolutions: Resolution2[];
}

interface Source3 {
    url: string;
    width: number;
    height: number;
}

interface Resolution3 {
    url: string;
    width: number;
    height: number;
}

interface Mp4 {
    source: Source3;
    resolutions: Resolution3[];
}

interface Variants {
    gif: Gif;
    mp4: Mp4;
}

interface Image {
    source: Source;
    resolutions: Resolution[];
    variants: Variants;
    id: string;
}

interface RedditVideoPreview {
    bitrate_kbps: number;
    fallback_url: string;
    height: number;
    width: number;
    scrubber_media_url: string;
    dash_url: string;
    duration: number;
    hls_url: string;
    is_gif: boolean;
    transcoding_status: string;
}

interface Preview {
    images: Image[];
    enabled: boolean;
    reddit_video_preview: RedditVideoPreview;
}

interface ResizedIcon {
    url: string;
    width: number;
    height: number;
}

interface ResizedStaticIcon {
    url: string;
    width: number;
    height: number;
}

interface AllAwarding {
    giver_coin_reward?: number;
    subreddit_id?: any;
    is_new: boolean;
    days_of_drip_extension: number;
    coin_price: number;
    id: string;
    penny_donate?: number;
    award_sub_type: string;
    coin_reward: number;
    icon_url: string;
    days_of_premium: number;
    tiers_by_required_awardings?: any;
    resized_icons: ResizedIcon[];
    icon_width: number;
    static_icon_width: number;
    start_date?: any;
    is_enabled: boolean;
    awardings_required_to_grant_benefits?: any;
    description: string;
    end_date?: any;
    subreddit_coin_reward: number;
    count: number;
    static_icon_height: number;
    name: string;
    resized_static_icons: ResizedStaticIcon[];
    icon_format: string;
    icon_height: number;
    penny_price?: number;
    award_type: string;
    static_icon_url: string;
}

interface RedditVideo2 {
    bitrate_kbps: number;
    fallback_url: string;
    height: number;
    width: number;
    scrubber_media_url: string;
    dash_url: string;
    duration: number;
    hls_url: string;
    is_gif: boolean;
    transcoding_status: string;
}

interface Oembed2 {
    provider_url: string;
    version: string;
    url: string;
    author_name: string;
    height?: number;
    width: number;
    html: string;
    author_url: string;
    provider_name: string;
    cache_age: any;
    type: string;
    description: string;
    title: string;
    thumbnail_width?: number;
    thumbnail_url: string;
    thumbnail_height?: number;
}

interface Media {
    reddit_video: RedditVideo2;
    type: string;
    oembed: Oembed2;
}

interface LinkFlairRichtext2 {
    e: string;
    t: string;
}

interface MediaEmbed2 {
    content: string;
    width: number;
    scrolling: boolean;
    height: number;
}

interface Oembed3 {
    provider_url: string;
    url: string;
    html: string;
    author_name: string;
    height?: any;
    width: number;
    version: string;
    author_url: string;
    provider_name: string;
    cache_age: number;
    type: string;
}

interface SecureMedia2 {
    oembed: Oembed3;
    type: string;
}

interface SecureMediaEmbed2 {
    content: string;
    width: number;
    scrolling: boolean;
    media_domain_url: string;
    height: number;
}

interface AuthorFlairRichtext2 {
    a: string;
    e: string;
    u: string;
}

interface Gildings2 {
    gid_1?: number;
}

interface Source4 {
    url: string;
    width: number;
    height: number;
}

interface Resolution4 {
    url: string;
    width: number;
    height: number;
}

interface Variants2 {
}

interface Image2 {
    source: Source4;
    resolutions: Resolution4[];
    variants: Variants2;
    id: string;
}

interface Preview2 {
    images: Image2[];
    enabled: boolean;
}

interface ResizedIcon2 {
    url: string;
    width: number;
    height: number;
}

interface ResizedStaticIcon2 {
    url: string;
    width: number;
    height: number;
}

interface AllAwarding2 {
    giver_coin_reward?: number;
    subreddit_id?: any;
    is_new: boolean;
    days_of_drip_extension: number;
    coin_price: number;
    id: string;
    penny_donate?: number;
    award_sub_type: string;
    coin_reward: number;
    icon_url: string;
    days_of_premium: number;
    tiers_by_required_awardings?: any;
    resized_icons: ResizedIcon2[];
    icon_width: number;
    static_icon_width: number;
    start_date?: any;
    is_enabled: boolean;
    awardings_required_to_grant_benefits?: any;
    description: string;
    end_date?: any;
    subreddit_coin_reward: number;
    count: number;
    static_icon_height: number;
    name: string;
    resized_static_icons: ResizedStaticIcon2[];
    icon_format: string;
    icon_height: number;
    penny_price?: number;
    award_type: string;
    static_icon_url: string;
}

interface Oembed4 {
    provider_url: string;
    url: string;
    html: string;
    author_name: string;
    height?: any;
    width: number;
    version: string;
    author_url: string;
    provider_name: string;
    cache_age: number;
    type: string;
}

interface Media2 {
    oembed: Oembed4;
    type: string;
}

interface CrosspostParentList {
    approved_at_utc?: any;
    subreddit: string;
    selftext: string;
    author_fullname: string;
    saved: boolean;
    mod_reason_title?: any;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: LinkFlairRichtext2[];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class: string;
    downs: number;
    thumbnail_height: number;
    top_awarded_type?: any;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: string;
    upvote_ratio: number;
    author_flair_background_color: string;
    subreddit_type: string;
    ups: number;
    total_awards_received: number;
    media_embed: MediaEmbed2;
    thumbnail_width: number;
    author_flair_template_id: string;
    is_original_content: boolean;
    user_reports: any[];
    secure_media: SecureMedia2;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category?: any;
    secure_media_embed: SecureMediaEmbed2;
    link_flair_text: string;
    can_mod_post: boolean;
    score: number;
    approved_by?: any;
    author_premium: boolean;
    thumbnail: string;
    edited: boolean;
    author_flair_css_class?: any;
    author_flair_richtext: AuthorFlairRichtext2[];
    gildings: Gildings2;
    post_hint: string;
    content_categories?: any;
    is_self: boolean;
    mod_note?: any;
    created: number;
    link_flair_type: string;
    wls: number;
    removed_by_category: string;
    banned_by?: any;
    author_flair_type: string;
    domain: string;
    allow_live_comments: boolean;
    selftext_html: string;
    likes?: any;
    suggested_sort?: any;
    banned_at_utc?: any;
    url_overridden_by_dest: string;
    view_count?: any;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    preview: Preview2;
    all_awardings: AllAwarding2[];
    awarders: any[];
    media_only: boolean;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text: string;
    treatment_tags: any[];
    visited: boolean;
    removed_by?: any;
    num_reports?: any;
    distinguished?: any;
    subreddit_id: string;
    mod_reason_by?: any;
    removal_reason?: any;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: boolean;
    report_reasons?: any;
    author: string;
    discussion_type?: any;
    num_comments: number;
    send_replies: boolean;
    whitelist_status: string;
    contest_mode: boolean;
    mod_reports: any[];
    author_patreon_flair: boolean;
    author_flair_text_color: string;
    permalink: string;
    parent_whitelist_status: string;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    num_crossposts: number;
    media: Media2;
    is_video: boolean;
    link_flair_template_id: string;
}

interface IRedditTop50DataItem {
    all_awardings: AllAwarding[];
    allow_live_comments: boolean;
    approved_at_utc?: any;
    approved_by?: any;
    archived: boolean;
    author_flair_background_color: string;
    author_flair_css_class: string;
    author_flair_richtext: AuthorFlairRichtext[];
    author_flair_template_id: string;
    author_flair_text_color: string;
    author_flair_text: string;
    author_flair_type: string;
    author_fullname: string;
    author_patreon_flair: boolean;
    author_premium: boolean;
    author: string;
    awarders: any[];
    banned_at_utc?: any;
    banned_by?: any;
    can_gild: boolean;
    can_mod_post: boolean;
    category?: any;
    clicked: boolean;
    content_categories?: any;
    contest_mode: boolean;
    created_utc: number;
    created: number;
    crosspost_parent_list: CrosspostParentList[];
    crosspost_parent: string;
    discussion_type?: any;
    distinguished?: any;
    domain: string;
    downs: number;
    edited: any;
    gilded: number;
    gildings: Gildings;
    hidden: boolean;
    hide_score: boolean;
    id: string;
    is_crosspostable: boolean;
    is_meta: boolean;
    is_original_content: boolean;
    is_reddit_media_domain: boolean;
    is_robot_indexable: boolean;
    is_self: boolean;
    is_video: boolean;
    likes?: any;
    link_flair_background_color: string;
    link_flair_css_class: string;
    link_flair_richtext: LinkFlairRichtext[];
    link_flair_template_id: string;
    link_flair_text_color: string;
    link_flair_text: string;
    link_flair_type: string;
    locked: boolean;
    media_embed: MediaEmbed;
    media_only: boolean;
    media: Media;
    mod_note?: any;
    mod_reason_by?: any;
    mod_reason_title?: any;
    mod_reports: any[];
    name: string;
    no_follow: boolean;
    num_comments: number;
    num_crossposts: number;
    num_reports?: any;
    over_18: boolean;
    parent_whitelist_status: string;
    permalink: string;
    pinned: boolean;
    post_hint: string;
    preview?: Preview;
    pwls: number;
    quarantine: boolean;
    removal_reason?: any;
    removed_by_category?: any;
    removed_by?: any;
    report_reasons?: any;
    saved: boolean;
    score: number;
    secure_media_embed: SecureMediaEmbed;
    secure_media: SecureMedia;
    selftext_html: string;
    selftext: string;
    send_replies: boolean;
    spoiler: boolean;
    stickied: boolean;
    subreddit_id: string;
    subreddit_name_prefixed: string;
    subreddit_subscribers: number;
    subreddit_type: string;
    subreddit: string;
    suggested_sort: string;
    thumbnail_height?: number;
    thumbnail_width?: number;
    thumbnail: string;
    title: string;
    top_awarded_type?: any;
    total_awards_received: number;
    treatment_tags: any[];
    ups: number;
    upvote_ratio: number;
    url_overridden_by_dest: string;
    url: string;
    user_reports: any[];
    view_count?: any;
    visited: boolean;
    whitelist_status: string;
    wls: number;
}

interface Child {
    kind: string;
    data: IRedditTop50DataItem;
}

interface IRedditTop50Data {
    modhash: string;
    children: Child[];
    after: string;
    before?: any;
}

interface IRedditTop50Root {
    kind: string;
    data: IRedditTop50Data
}
