import React from "react";
import RecipeForm from "../RecipeForm";
import { api } from "../ApiConfig";

class EditRecipe extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      author: "",
      img: "",
      description: "",
      prep_time: 0,
      serving_size: 0,
      calories_count: 0,
      star_rating: 0,
      ingredients: "",
      directions: "",
      errorMsg: ""
    };
  }

  componentDidMount() {
    this.fetchRecipeById();
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      name,
      author,
      img,
      description,
      prep_time,
      serving_size,
      calories_count,
      star_rating,
      ingredients,
      directions
    } = this.state;
    const data = {
      name,
      author,
      img,
      description,
      prep_time,
      serving_size,
      calories_count,
      star_rating,
      ingredients,
      directions
    };
    api
      .put(`/recipes/${this.props.match.params.recipe_id}`, data)
      .then(response =>
        response.status === 200 ? this.props.history.push("/recipes") : null
      )
      .catch(() =>
        this.setState({ errorMsg: "An error has been found in edit component" })
      );
  };

  fetchRecipeById = async () => {
    const {
      match: { params }
    } = this.props;
    try {
      const recipes = await api.get(`/recipes/${params.recipe_id}`);
      this.setState({
        name: recipes.data.name,
        author: recipes.data.author,
        img: recipes.data.img,
        description: recipes.data.description,
        prep_time: recipes.data.prep_time,
        serving_size: recipes.data.serving_size,
        calories_count: recipes.data.calories_count,
        star_rating: recipes.data.star_rating,
        ingredients: recipes.data.ingredients,
        directions: recipes.data.directions
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      name,
      author,
      img,
      description,
      prep_time,
      serving_size,
      calories_count,
      star_rating,
      ingredients,
      directions
    } = this.state;
    return (
      <div className='edit-page'>
        <h3>Change your recipe</h3>
        <RecipeForm
          formData={{
            name,
            author,
            img,
            description,
            prep_time,
            serving_size,
            calories_count,
            star_rating,
            ingredients,
            directions
          }}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        {this.state.errorMsg ? (
          <p className="error-text">{this.state.errorMsg}</p>
        ) : null}
      </div>
    );
  }
}


export default EditRecipe