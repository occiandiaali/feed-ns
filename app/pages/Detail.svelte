<script>
  import { navigate } from "svelte-native";
  import { FeedService } from "~/services/feedService";
  import Home from "./Home.svelte";

  export let feedId;

  let feed = FeedService.getInstance().getFeedById(feedId);

  function goBack() {
    navigate({
      page: Home,
    });
  }
</script>

<page>
  <actionBar title={feed.title} flat="true">
    <navigationButton
      text="back"
      android.systemIcon="ic_menu_back"
      on:tap={goBack}
    />
  </actionBar>
  <scrollView>
    <stackLayout height="100%">
      <gridLayout
        borderRadius="20"
        borderWidth="0.5"
        class="bg-secondary"
        rows="*, auto, auto, auto"
        columns="*"
        margin="5 10"
        padding="6"
      >
        <image margin="0" row="0" stretch="aspectFill" src={feed.image} />
        <!-- <stackLayout padding="10 20">
        {#each flick.details as details}
        <stackLayout>
          <label
            marginTop="15"
            fontSize="16"
            fontWeight="700"
            class="text-primary"
            textWrap="true"
            text="{details.title}"
          />
          <label
            fontSize="14"
            class="text-secondary"
            textWrap="true"
            text="{details.body}"
          />
        </stackLayout>
        {/each}
      </stackLayout> -->
        <stackLayout padding="10 20" row="1">
          <gridLayout horizontalAlignment="left" columns="auto, auto">
            <image
              src={feed.image}
              col="0"
              margin="0"
              width="40"
              height="40"
              borderRadius="40"
            />
            <label
              col="1"
              margin="0"
              class="text-secondary"
              fontSize="14"
              fontWeight="700"
              text={feed.title.slice(0, 14) + ".."}
            />
          </gridLayout>
          <label
            fontSize="24"
            row="2"
            class="text-secondary"
            textWrap="true"
            text={feed.description}
          />
          <gridLayout horizontalAlignment="center" row="3" columns="auto, auto">
            <button
              text="Like"
              col="0"
              width="100"
              backgroundColor="green"
              color="white"
            />
            <button
              text="Comment"
              col="1"
              backgroundColor="orange"
              width="100"
              color="white"
            />
          </gridLayout>
        </stackLayout>
      </gridLayout>
    </stackLayout>
  </scrollView>
</page>
