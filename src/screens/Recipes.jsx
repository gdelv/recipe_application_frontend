import React from "react";
import { Button } from "../shared/Button";
import { api } from "../ApiConfig";


class Recipes extends React.Component {
  state = {
    recipes: [],
    recipeToDelete: {},
    toDelete: false
  };

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes() {
    fetch(`https://g-recipe-app.herokuapp.com/recipes`)
      .then(response => response.json())
      .then(jsonedRecipes => this.setState({ recipes: jsonedRecipes }))
      .catch(error => console.error(error));
  }

  showStars(num) {
      let image = '★';
      return image.repeat(num)

  }

  handleDeleteRecipe = () => {
    api.delete(`/recipes/${this.state.recipeToDelete.id}`)
      .then(() => {
        const allRecipes = this.state.recipes
        allRecipes.splice(this.state.recipeToDelete.index, 1)
        this.setState({ recipes: allRecipes })
      }).then(() => this.handleCloseModal())
      .catch(error => console.error(error))
  }

  handleOpenModal = (recipe, index) => {
    this.setState({ toDelete: true, recipeToDelete: { ...recipe, index } })
  }

  handleCloseModal = () => {
    this.setState({ toDelete: false, recipeToDelete: {} })
  }

  renderRecipes = () => {
    const {
      match: { path },
      history
    } = this.props
    return (
      <>
        {this.state.recipes.map((recipe,index) => {
          return (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.img} alt='recipe'/>
              <div className='stars-container'>
                <span className='stars'>{this.showStars(recipe.star_rating)}</span>
                
                
              
              </div>
              <p>{recipe.description.slice(0,100) + "..."}</p>
              <Button title="More" className="more-button" onClick={() => history.push(`${path}/${recipe.id}`)}/>
              <Button title='X' className='delete' onClick={() => this.handleOpenModal(recipe, index)}/>
              <Button title='Edit' className='edit' onClick={() => history.push(`${path}/edit/${recipe.id}`)}/>
              <h3>Posted by: {recipe.author}</h3>

            </div>
          );
        })}
                      {this.renderDeleteConfirmModal()}

      </>
    );
  }

  renderDeleteConfirmModal = () => {
    if(this.state.toDelete) {
      return (
        <div className='modal'>
    <h3>Are you sure you want to delete your {this.state.recipeToDelete.name} recipe?</h3>
          <div className='modal-button-container'>
            <Button
              title='Yes'
              className='yes-button'
              onClick={this.handleDeleteRecipe}
            />

            <Button
              title='No'
              className='no-button'
              onClick={this.handleCloseModal}
            />
          </div>
        </div>
      )
    } else {
      return (<div className='close'></div>)
    }
  }

  render() {
    return (
      <>
        <h1 className='recipes-title'>All Recipes</h1>
        <div className='recipes-container'>
        {this.renderRecipes()}
        </div>
        {/* {this.renderDeleteConfirmModal()} */}
      </>
    )
  }
}

export default Recipes;
