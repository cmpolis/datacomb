#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
datacomb <- function(message, width = NULL, height = NULL) {

  # forward options using x
  x = list(
    message = message
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'datacomb',
    x,
    width = width,
    height = height,
    package = 'datacomb'
  )
}

#' Widget output function for use in Shiny
#'
#' @export
datacombOutput <- function(outputId, width = '100%', height = '400px'){
  shinyWidgetOutput(outputId, 'datacomb', width, height, package = 'datacomb')
}

#' Widget render function for use in Shiny
#'
#' @export
renderDatacomb <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  shinyRenderWidget(expr, datacombOutput, env, quoted = TRUE)
}
