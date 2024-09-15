<script>
  import { Template } from "svelte-native/components";
  import { navigate } from "svelte-native";
  import { FeedService } from "~/services/feedService";
  import { Screen } from "@nativescript/core";

  import Detail from "./Detail.svelte";

  let feedList = FeedService.getInstance().getFeedList();

  function onFeedTap(event) {
    navigate({
      page: Detail,
      props: { feedId: feedList[event.index].id },
    });
  }
</script>

<page backgroundColor="#D3D3D3">
  <actionBar flat="true" backgroundColor="#D3D3D3">
    <image src="~/assets/logo.png" height="48" marginTop="8" />
  </actionBar>

  <stackLayout>
    <listView
      height={Screen.mainScreen.heightDIPs}
      separatorColor="transparent"
      items={feedList}
      on:itemTap={onFeedTap}
    >
      <Template let:item>
        <gridLayout
          height="350"
          borderRadius="20"
          borderWidth="0.3"
          class="bg-secondary"
          rows="*, auto, auto, auto"
          columns="*"
          margin="3 0"
          padding="5"
          backgroundColor="orangered"
        >
          <image row="0" margin="0" stretch="aspectFill" src={item.image} />
          <label
            row="1"
            margin="10 10 0 10"
            fontWeight="700"
            class="text-primary"
            fontSize="18"
            color="wheat"
            text={item.title}
          />
          <!-- <label
            row="2"
            margin="0 10 10 10"
            class="text-secondary"
            fontSize="14"
            textWrap="true"
            text={item.description}
          /> -->
          <gridLayout horizontalAlignment="left" row="3" columns="auto, auto">
            <image
              src={item.image}
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
              color="wheat"
              text={item.title.slice(0, 14) + ".."}
            />
          </gridLayout>
        </gridLayout>
      </Template>
    </listView>
  </stackLayout>
</page>
