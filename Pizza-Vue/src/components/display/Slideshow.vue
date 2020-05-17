<template>
  <div v-if="currentImage" class="row col s12" id="slideshow_container">
    <router-link
      class="disabled"
      id="order_pizza"
      :to="{ name: 'Custom_Order', params: { param_pizza: this.currentImage.id }}"
    >
      <img :src="currentImage.img" class="row z-depth-2" id="slideshow_image" />
    </router-link>
    <div class="btn" id="nextButton" @click="changeImage(1)">
      <i class="material-icons">arrow_forward</i>
    </div>
    <div class="btn" id="prevButton" @click="changeImage(-1)">
      <i class="material-icons">arrow_back</i>
    </div>
    <h4 class="white-text" id="image_name">{{ currentImage.name }}</h4>
  </div>
</template>

<script>
import firebase from "firebase"
import db from "@/firebase/init"

export default {
  name: 'Slideshow',
  data() {
    return {
      images: [],
      index: null,
      currentImage: null,
      animationDuration: 0.4
    }
  },
  methods: {
    async changeImage(direction) {
      let imageElement = document.getElementById("slideshow_image")
      let nextBtn = document.getElementById("nextButton")
      let prevBtn = document.getElementById("prevButton")
      let imgName = document.getElementById("image_name")

      nextBtn.classList.add("disabled")
      prevBtn.classList.add("disabled")
      imgName.classList.add("hide")
      imageElement.classList.add("fade_out")

      await setTimeout(() => {

        if (direction > 0)
          this.nextImage()
        else
          this.prevImage()

        this.currentImage = {
          id: this.images[this.index].id,
          img: this.images[this.index].data.img_url,
          name: this.images[this.index].data.name,
        }

        imageElement.classList.remove("fade_out")
        imageElement.classList.add("fade_in")

        setTimeout(() => imageElement.classList.remove("fade_in"), this.animationDuration * 1000)

        nextBtn.classList.remove("disabled")
        prevBtn.classList.remove("disabled")
        imgName.classList.remove("hide")

      }, this.animationDuration * 1000)
    },
    nextImage() {
      if (this.index == this.images.length - 1)
        this.index = 0
      else
        this.index += 1
    },
    prevImage() {
      if (this.index == 0)
        this.index = this.images.length - 1
      else
        this.index -= 1
    }
  },
  async beforeCreate() {
    await db
      .collection("pizzas")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.images.push({
            id: doc.id,
            data: doc.data()
          });
        });
      })
      .catch(err => console.error(err))

    this.index = 0
    this.currentImage = {
      id: this.images[this.index].id,
      img: this.images[this.index].data.img_url,
      name: this.images[this.index].data.name,
    }
  }
}
</script>

<style>
#nextButton,
#prevButton {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  padding: 0 5px;

  font-size: 20px;
}

#nextButton {
  right: 10px;
}

#prevButton {
  left: 10px;
}

#slideshow_container,
#order_pizza {
  position: relative;
  width: 100%;
  height: 350px;
}

#slideshow_image {
  position: relative;
  margin: 0 20px;
  object-fit: cover;
  object-position: 50% 50%;

  width: 90%;
  height: inherit;

  border-radius: 10px;
}

.btn {
  cursor: default;
}

.fade_out {
  opacity: 1;
  animation-name: out;
  animation-duration: 0.5s;
}

.fade_in {
  opacity: 0;
  animation-name: in;
  animation-duration: 0.5s;
}

@keyframes out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

#image_name {
  position: relative;
  transform: translateY(-200%);
  text-shadow: 2px 2px 5px black;
}
</style>