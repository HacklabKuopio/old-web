<script setup>
    const { locale } = useI18n()
</script>

<template>

    <Head>
        <Meta property="og:title" content="Hacklab Kuopio"/>
        <Meta property="og:description" content="Yhteisöllinen työtila"/>
        <Meta property="og:image" content="/img/nuxt.png"/>
        <Meta name="twitter:card" content="summary"/>
    </Head>

    <div class="header">
        <div id="halko" class="title">
            <h1>Hacklab Kuopio</h1>
            <h4>{{ $t('slogan') }}</h4>
        </div>
    </div>

    <div class="content-wrapper flex">
        <div class="content">
            <p>
                <a href="https://hacklab.fi">{{ $t('greetingLinkText') }}</a> {{ $t('greetingText') }}
            </p>
            <p>
                {{ $t('introduction') }}
            </p>
            <div class="boxed">
                <p>
                    {{ $t('locationText1') }} (<b>Kauppakatu 44</b>)<br/>
                    {{ $t('locationText2') }}
                </p>
                <ul>
                    <li>
                        <span>
                            <b>{{ $t('schedule1Day') }}</b> <a href="https://diginatiivit.fi/">{{ $t('schedule1LinkText') }}</a> {{ $t('schedule1Text') }} <b>{{ $t('schedule1Time') }}</b>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b>{{ $t('schedule2Day') }}</b> {{ $t('schedule2Text') }} <b>{{ $t('schedule2Time') }}</b>
                        </span>
                    </li>
                </ul>
                <p>
                    {{ $t('discordText') }} <a href="https://discord.gg/z2Nz7ygngE">{{ $t('discordLinkText') }}</a>.
                </p>
                <p>
                    {{ $t('experience') }}
                </p>
            </div>


            <p class="map">
                <img src="/img/kartta.jpg" alt=""/>
            </p>


            <h4>{{ $t('announcements') }}</h4>
            <!-- <p>Ei uusia tiedotteita.</p> -->
            <p><a href="/blog/">{{ $t('blogAnnouncementsLinkText') }}</a> {{ $t('blogAnnouncementsText') }}<br/>
            {{ $t('beginningStoryTextLink') }} [<a href="/blog/001-first-post/">{{ $t('beginningStroyText') }}</a>].</p>

            <br/>
            <br/>
            <br/>


            <footer>
                <div class="float-right contact">
                    <h4>
                        {{ $t('contact') }}
                    </h4>
                    <span>
                        <img src="/img/email.png" alt=""/>
                    </span>
                    <span>
                        Kauppakatu 44, Kuopio
                    </span>
                </div>
            </footer>

        </div>
    </div>

    <!-- <footer>
        &copy; 2023
    </footer> -->

    <!-- <div class="flex flex-col items-center justify-center" style="height: 100vh">
        <h1 class="text-center">Welcome to the blog starter!</h1>
        <NuxtLink to="/blog/">Read the blog!</NuxtLink>
    </div> -->
</template>