import React from "react";
import { api } from "../ApiConfig";

class Recipe extends React.Component {
  state = {
    name: "",
    author: "",
    img: "",
    description: "",
    prep_time: 0,
    serving_size: 0,
    calories_count: 0,
    star_rating: 0,
    errorMsg: ""
  };

  componentDidMount() {
      this.fetchRecipeById()
  }

  fetchRecipeById = async () => {
      const {
          match: { params }
      } = this.props
      try {
          const recipes = await api.get(`/recipes/${params.recipe_id}`)
          this.setState({
              name: recipes.data.name,
              author: recipes.data.author,
              img: recipes.data.img,
              description: recipes.data.description,
              prep_time: recipes.data.prep_time,
              serving_size: recipes.data.serving_size,
              calories_count: recipes.data.calories_count,
              star_rating: recipes.data.star_rating,
          })
      } catch (error) {
          console.error(error)
      }
  }

  showStars(num) {
    let image = '★';
    return image.repeat(num)

}

  render() {
  return (
  <>
    <div className='card-top-container'>
      <h2>{this.state.name}</h2>
      <span className='stars'>{this.showStars(this.state.star_rating)}</span>
      <h4>{`Recipe By ${this.state.author}`}</h4>
  <p>{this.state.description}</p>
  <img src={this.state.img} />
    </div>
  </>
  )
  }
}

export default Recipe;
