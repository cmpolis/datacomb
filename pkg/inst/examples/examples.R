library(datacomb)

df <- data.frame(model=rownames(mtcars),mtcars)
Datacomb(
  df,
  columns = colnames(df)[-1],
  rowLabel = "model"
)

data(diamonds, package = "ggplot2")
Datacomb(diamonds)
