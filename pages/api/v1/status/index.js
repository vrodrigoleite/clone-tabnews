function status(request, response) {
  response.status(200).json({ status: "Os alunos são acima da média" });
}

export default status;
